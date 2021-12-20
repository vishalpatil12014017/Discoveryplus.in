import React from 'react'
import { useState, useEffect } from 'react';
import Dbdata from '../../../Utils/request'
import styled from "styled-components"
import play from '../Img/play.png'
import pri from '../Img/pri.png'
import like1 from '../Img/like1.png'
import like2 from '../Img/like2.png'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Toolbar = styled.header`
* {box-sizing: border-box}
.card {
  position: relative;
}
.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}
.col-10 {
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.smooth{
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.overlay1 {
 
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  width: 100%;
  transition: .5s ease;
  opacity:0;
  height:100%;
  color: white;
  padding:10px;
}
.card:hover .overlay1 {
  opacity: 1;
  
}
.card:hover 
  .btn-primary{
     display:none
  
}
.top-left {
  position: absolute;
  top: 8px;
  left: 10px;
  @media all and (max-width:900px){   
      width:8%;
      height:8%
   } 
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.col-2{
    align-text:center;
    @media all and (max-width:576px){   
     display:none
   } 
}
.centered {
  position: absolute;
  max-width:"5px";
  max-height:"5px";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media all and (max-width:500px){   
      width:30px;
      height:30px
   } ,
   @media all and (max-width:350px){   
      width:20px;
      height:20px
   } 
}
.bottomCentered{
    position: absolute;
  max-width:"5px";
  max-height:"5px";
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media all and (max-width:800px){   
     display:none
   } 

}
.row{
    position: relative;
  top: 70%;
  left: 0%;
  @media all and (max-width:984px){   
    top: 78%;
  left: 0%;
   } 
  /* transform: translate(-50%, -50%); */
}
p{
    @media all and (max-width:900px){   
       display:none
   }  
}
.like{
    @media all and (max-width:900px){   
       display:none
   } 
}
h5{
    @media all and (max-width:716px){   
       display:none
   } 
}
.hov:hover{
    color:white !important
}

`
function Showlove() {
    const [showlove, setShowlove] = useState([]);
    const getshowdata = async () => {
        await Dbdata.get("showlove")
            .then(({ data }) => {
                setShowlove(data.showlove)
                return;
            })

    }

    useEffect(() => {
        getshowdata()
    }, [])
    // console.log(showlove);
    const handlecolor = (id) => {
        const updated = showlove.filter((e) => {
            if (e._id === id) {
                e.likestatus = !e.likestatus
            }
            return e;
        })
        setShowlove(updated)
    }
    const style = {
        color: "#838991"
        , fontSize: "16px",
        textDecoration: "none"
    }
    const {setshowData } = useContext(AuthContext);
    return (
        <Toolbar>
            <div style={{ padding: "4%", paddingTop: "1%", paddingBottom: "1%" }}>
                <h1 className='pt-3' style={{ fontSize: "20px", color: "white" }}>Shows You Love<Link to="/showall" className='float-end pt-0 hov' style={style}>View All</Link></h1>
                <div className="row">
                    <div className="col col-6  g-3 col-lg-4 col-xl-3" key={showlove[0]?._id} >
                    <Link to="/watch">
                                    <div className="card" key={showlove[0]?._id} style={{ borderRadius: "10px" ,border:"none"}} onClick={()=>{
                                        setshowData({...showlove[0]})
                                    }}>
                                <img style={{ borderRadius: "10px" }} src={showlove[0]?.image_url} classname="img-fluid" alt="" />
                                {
                                    showlove[0]?.prime ? <img className='top-left' src={pri} alt="" /> : null
                                }
                                {
                                    !showlove[0]?.newstatus ? <button className="btn-primary bottomCentered px-2" style={{ fontSize: "12px", borderRadius: "5px" }}>NEW EPISODE</button> : null
                                }
                                <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{showlove[0]?.title}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                            <p className="float-start" style={{ color: "#abafb4" }} aria-current="page" >{showlove[0]?.description}</p>
                                        </div>
                                        <div className="col-2">
                                            <img className="p-0 m-0 float-end like" src={showlove[0]?.likestatus ? like2 : like1} alt="" onClick={() => {
                                                handlecolor(showlove[0]?._id)

                                            }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col col-6  g-3 col-lg-4 col-xl-3" key={showlove[1]?._id} >
                    <Link to="/watch">
                                    <div className="card" key={showlove[1]?._id} style={{ borderRadius: "10px" ,border:"none"}} onClick={()=>{
                                        setshowData({...showlove[1]})
                                    }}>
                                <img style={{ borderRadius: "10px" }} src={showlove[1]?.image_url} classname="img-fluid" alt="" />
                                {
                                    showlove[1]?.prime ? <img className='top-left' src={pri} alt="" /> : null
                                }
                                {
                                    !showlove[1]?.newstatus ? <button className="btn-primary bottomCentered px-2" style={{ fontSize: "12px", borderRadius: "5px" }}>NEW EPISODE</button> : null
                                }
                                <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{showlove[1]?.title}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                            <p className=" float-start" style={{ color: "#abafb4" }} aria-current="page" >{showlove[1]?.description}</p>
                                        </div>
                                        <div className="col-2">
                                            <img className="p-0 m-0 float-end like" src={showlove[1]?.likestatus ? like2 : like1} alt="" onClick={() => {
                                                handlecolor(showlove[1]?._id)

                                            }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col col-6  g-3 col-lg-4 col-xl-3" key={showlove[2]?._id} >
                    <Link to="/watch">
                                    <div className="card" key={showlove[2]?._id} style={{ borderRadius: "10px" ,border:"none"}} onClick={()=>{
                                        setshowData({...showlove[2]})
                                    }}>

                                <img style={{ borderRadius: "10px" }} src={showlove[2]?.image_url} classname="img-fluid" alt="" />
                                {
                                    showlove[2]?.prime ? <img className='top-left' src={pri} alt="" /> : null
                                }
                                {
                                    !showlove[2]?.newstatus ? <button className="btn-primary bottomCentered px-2" style={{ fontSize: "12px", borderRadius: "5px" }}>NEW EPISODE</button> : null
                                }
                                <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{showlove[2]?.title}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                            <p className=" float-start" style={{ color: "#abafb4" }} aria-current="page" >{showlove[2]?.description}</p>
                                        </div>
                                        <div className="col-2">
                                            <img className="p-0 m-0 float-end like" src={showlove[2]?.likestatus ? like2 : like1} alt="" onClick={() => {
                                                handlecolor(showlove[2]?._id)

                                            }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col col-6  g-3 col-lg-4 col-xl-3" key={showlove[3]?._id} >
                    <Link to="/watch">
                                    <div className="card" key={showlove[3]?._id} style={{ borderRadius: "10px" ,border:"none"}} onClick={()=>{
                                        setshowData({...showlove[3]})
                                    }}>
                                <img style={{ borderRadius: "10px" }} src={showlove[3]?.image_url} classname="img-fluid" alt="" />
                                {
                                    showlove[3]?.prime ? <img className='top-left' src={pri} alt="" /> : null
                                }
                                {
                                    !showlove[3]?.newstatus ? <button className="btn-primary bottomCentered px-2" style={{ fontSize: "12px", borderRadius: "5px" }}>NEW EPISODE</button> : null
                                }
                                <div className="overlay1" style={{ padding: "1%" }}>
                                    <img className='centered' src={play} alt="" style={{ maxwidth: "45px", maxHeight: "45px" }} />
                                    <div className="row mb-0 pb-0">
                                        <h5 className='mb-0 tit smooth' >{showlove[3]?.title}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-10">
                                            <p className=" float-start" style={{ color: "#abafb4" }} aria-current="page" >{showlove[3]?.description}</p>
                                        </div>
                                        <div className="col-2">
                                            <img className="p-0 m-0 float-end like" src={showlove[3]?.likestatus ? like2 : like1} alt="" onClick={() => {
                                                handlecolor(showlove[3]?._id)

                                            }} />
                                        </div>
                                    </div>

                                </div>
                          
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </Toolbar>
    )
}

export default Showlove
