import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Image from 'next/image'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import JobsCard from './JobsCard';
import jobimage from './aserts/job.jpg';
import { AiOutlineCaretDown,AiOutlineCaretUp } from 'react-icons/ai';
export default function Intro() {
  const [search, setSearch] = useState('');
  const jobData = useSelector(state => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([])
  const [doneSearch , setDoneSearch] = useState(false)
  const [isOpen,setIsOpen] = useState(false);
  const [isOpen1,setIsOpen1] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true)
  }

  return (
    <>
      <div className='w-full  h-full flex items-center lg:justify-start py-36 justify-center flex-wrap  '>
        <div className='lg:w-1/6 bg-gray-400 w-full h-screen'>
          <h1></h1>
        </div> 
        <div className='lg:w-4/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start md:justify-start md:p-5 flex-col '>
          <h1 className=' items-center justify-center md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black items-center '>The Best Place to Find Your <span className='text-indigo-600 justify-center flex items-center  '> Dream Jobs.</span> </h1>
          <p className='pt-10 md:text-lg sm:text-sm text-xs mb-10 text-gray-400'>2400 Peoples are daily search in this portal, 100 user added job portal!</p>
          <div className='bg-white flex-col mb-10 w-full md:px-10   py-0 flex sm:flex-row items-center'>
            <BiSearchAlt className='text-8xl text-blue-600 mx-2 hidden sm:flex' />
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Jobs with Job categories like software ...' className='xs:w-full w-3/4  h-3/4 px-2 bg-gray-300 text-base py-0 outline-none' />
            <dv className="px-3 py-2 my-2">
              <button onClick={() => setIsOpen((prev)=> !prev)} className='items-center  px-3 py-2 my-2 sm:my-0 border border-blue-600 rounded uppercase tracking-widest mx-4   text-white bg-blue-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600 flex '>Location
              {!isOpen ?(
                <AiOutlineCaretDown className='h-8'/> 
                ):(
                <AiOutlineCaretUp className='h-8'/>
                )}
              </button>
              {isOpen&& (
                <div className='bg-blue-400 absolute items-start rounded-lg p-2 w-40'>
                  <ul >
                    <li className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>Colombo</li>
                    <li className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>kandy</li>
                  </ul>
                </div>
              )}
            </dv>
            <dv className="px-3 py-2 my-2">
              <button onClick={() => setIsOpen1((prev)=> !prev)} className='items-center  px-3 py-2 my-2 sm:my-0 border border-blue-600 rounded uppercase tracking-widest mx-4   text-white bg-blue-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600 flex '>selary
              {!isOpen1 ?(
                <AiOutlineCaretDown className='h-8'/> 
                ):(
                <AiOutlineCaretUp className='h-8'/>
                )}
              </button>
              {isOpen1 && (
                <div className='bg-blue-400 absolute items-start rounded-lg p-2 w-40'>
                  <ul >
                    <li onClick={handleSearch} className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>40000</li>
                    <li onClick={handleSearch} className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>80000</li>
                  </ul>
                </div>
              )}
            </dv>
            <button onClick={handleSearch} className='px-1 py-3 my-2 sm:my-0 border border-blue-600 rounded uppercase tracking-widest mx-4   text-white bg-blue-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600'>Search</button>
          </div>
          <div className=' w-full px-2 py-2 flex items-center justify-start flex-wrap'>
            <div className='flex items-center justify-center'>
              <BsFillBookmarkFill className='text-blue-600 text-xl mx-2' />
              <h1 className='font-semibold text-lg'>Suggest Tag : </h1>
            </div>
            <div className='flex   items-center justify-center px-4 flex-wrap'>
              <p className='px-2  text-gray-600'>Software</p>
              <p className='px-2  text-gray-600'>Marketing</p>
              <p className='px-2  text-gray-600'>UI/UX Design</p>
            </div>
          </div>
        </div>
        <div className='w-1/6 my-0 place-items-start h-full bg-gray-200 hidden  flex-col p-0 lg:flex'>
          <Image width={600} height={700} src={jobimage} alt="no-image-found" />
        </div>
      </div>
      {
        doneSearch && (
          <div className='w-full flex flex-wrap items-center justify-center py-1 px-1'>
            {
              Array.isArray(filterJobs) && filterJobs.length > 0 ? filterJobs?.map((job) => {
                return (
                  <JobsCard job={job} key={job?._id} />
                )
              }) : <p className='text-sm text-center font-semibold  text-red-500'>Sorry No such Categories Job Available Right Now</p>
            }
          </div>
        )
      }
    </>
  )
}


