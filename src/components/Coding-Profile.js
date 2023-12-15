import React from 'react'
import {SiLeetcode,SiGeeksforgeeks} from "react-icons/si"
import {FaHackerrank} from "react-icons/fa"
function aboutdescribe() {
  return (
    <div className="coding-profile">
        <h1 className="heading coding-profile-heading">CODING PROFILES</h1>
        <div className="each-profile">
         <SiLeetcode size={50} style={{color:"white"}}/>
         <a href="https://leetcode.com/itsamitofficial37/"  className="profile-heading">Leetcode</a>
         </div>

         <div className="each-profile">
         <SiGeeksforgeeks size={50} style={{color:"white"}}/>
         <a href="https://auth.geeksforgeeks.org/user/amitoffivbr4"  className="profile-heading">GeeksForGeeks</a>
         </div>

         <div className="each-profile">
         <FaHackerrank size={50} style={{color:"white"}}/>
         <a href="https://www.hackerrank.com/amitofficial37?hr_r=1" className="profile-heading">Hackerrank</a>
         </div>
    </div>
  )
}

export default aboutdescribe
