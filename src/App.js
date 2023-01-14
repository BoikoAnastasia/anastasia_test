import './App.css';
import React, { useState, useEffect } from 'react';
import { GetData } from './API/GetData';
import Header from './components/Header';
import Mein from './components/Mein';
import LoadingPage from './components/LoadingPage';
import Pagination from './components/Pagination';


function App() {
  const [listProgects, setListProgects] = useState([])
  const [searchData, setSearchData] = useState('subject')
  const [loadingPage, setLoadingPage] = useState(false)


  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  const getData = async (req) => {
    try {
      setLoadingPage(true)
      const data = await GetData(req)
      setListProgects(data.items)
      setCurrentPage(1)
      setLoadingPage(false)
    }
    catch (e) { console.error(`Ошибка ${e}`) }
  }

  useEffect(() => {
    getData(searchData)
  }, [])

  const getSearchData = (data) => {
    if (data.length < 3) { return }
    else {
      setSearchData(data)
      getData(data)
    }
  }

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = listProgects.slice(firstPostIndex, lastPostIndex)


  return (
    <div className="App">
      <Header getSearchData={getSearchData} />
      {loadingPage
        ? <LoadingPage />
        : <Mein className="mein" projects={currentPosts} />
      }
      <Pagination className="footer"
        listProgects={listProgects.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostPerPage={setPostPerPage}
      />
    </div>
  );
}

export default App;
