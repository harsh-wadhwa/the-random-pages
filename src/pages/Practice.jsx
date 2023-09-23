import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PracticeQuestion = (props) => {

  const [wholeData, setWholeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const pagesComparisionFunction = (a, b) => {
    if (a?.title > b?.title) {
      return 1;
    } else if (a?.title < b?.title) {
      return -1;
    } else {
      return 0;
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get(`https://library-server-dukooagnq-harsh-wadhwa.vercel.app/books?page=1&pageSize=20`);
      if (response?.status === 200) {
        let wholeData = (response?.data);
        setWholeData(wholeData)
        let filteredData = wholeData?.filter((item) => {
          return (item?.language === "English")
        })
        setFilteredData(filteredData);
        filteredData.sort(pagesComparisionFunction)
        setSortedData(filteredData);

      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])



  return (
    <div>
      <div style={{margin: '20px 0'}}>
        All data rcvd from api :
        {wholeData?.map((item, index)=> {
          return (
            <div>
              {item?.title} written by {item?.author} with {item?.pages}
            </div>
          )
        })}
      </div>
      <div style={{margin: '20px 0'}}>
        data with filter of language english:
      {filteredData?.map((item, index)=> {
          return (
            <div>
              {item?.title} written by {item?.author} with {item?.pages}
            </div>
          )
        })}
      </div>
      <div style={{margin: '20px 0'}}>
        sorted data based on page numbers:
      {sortedData?.map((item, index)=> {
          return (
            <div>
              {item?.title} written by {item?.author} with {item?.pages}
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default PracticeQuestion;
