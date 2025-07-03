import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Routing/Navbar'
import Home_page from './Routing/Component/Home_page'
import Contact_Page from './Routing/Component/Contact_Page'
import About_page from './Routing/Component/About_page'
import Feedback_page from './Routing/Component/Feedback_page'
import Post from './Routing/Component/Post'
import Show from './Routing/Component/Show'
import Createpost, { Createposts } from './Routing/Component/Createpost'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home_page />} />
          <Route path='/Contact_page' element={<Contact_Page />} />
          <Route path='/About_page' element={<About_page />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Post/:id' element={<Createposts>
             <Show />
          </Createposts>} />
          <Route path='/Feedback_page' element={<Feedback_page />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App