import { useState } from "react";
import React  from "react";
import "./EmpCollection.css";

export const EmpCollection = () => {
const sampleClickingFunction = (e) => {
    var imgParents = e.target.parentElement;
    var imgSibling = imgParents.children[1];
    imgSibling.classList.remove('title');
    imgSibling.classList.add('title-Visible');
    e.target.classList.add('img-cl');
};
const sampleClickingFunctioneOut = (e) => {
    var imgParents = e.target.parentElement;
    var imgSibling = imgParents.children[1];
    imgSibling.classList.add('title');
    imgSibling.classList.remove('title-Visible');
    e.target.classList.remove('img-cl');
};
  return (
    <div className="empcollection">
      <div className="heading">
        <p className="head">BUILDERS</p>
        <p className="par">Find the best suitable builder for your work.</p>
      </div>
      <div className="collection">
        <div className="row">
          <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
              <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093871/buildme/Rectangle_6_12_tlp6an.png" alt="" />
              <div className="title" >Plumber</div>
          </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093871/buildme/Rectangle_6_13_bpijfa.png" alt=""  />
          <div className="title">Painter</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093871/buildme/Rectangle_6_14_plsi8g.png" alt=""  />
          <div className="title">Electrician</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_15_mmv9xc.png" alt=""  />
          <div className="title">Helper</div>
        </div>
        </div>
      </div>

      <div className="collection">
        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_16_xxx0bf.png" alt=""  />
          <div className="title">Carpenter</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_17_yxvlnw.png" alt=""  />
          <div className="title">Tile</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093871/buildme/Rectangle_6_18_eg2wcx.png" alt=""  />
          <div className="title">Roofer</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_22_vix1ff.png" alt="" className="img-cl" />
          <div className="title">Mason</div>
        </div>
        </div>
      </div>

      <div className="collection">
        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_20_rek0om.png" alt="" className="img-cl" />
          <div className="title">Glazier</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_21_nqhod0.png" alt="" className="img-cl" />
          <div className="title">Aluminium</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093870/buildme/Rectangle_6_22_vix1ff.png" alt="" className="img-cl" />
          <div className="title">Concrete Slab</div>
        </div>
        </div>

        <div className="row">
        <div onMouseOver={(e) => sampleClickingFunction(e)} onMouseOut={(e) => sampleClickingFunctioneOut(e)}>
          <img src="https://res.cloudinary.com/dgpl8g1nn/image/upload/v1700093872/buildme/Rectangle_6_23_desrlc.png" alt="" className="img-cl" />
          <div className="title">Ceiling</div>
        </div>
        </div>
      </div>



    </div>
  );
};

export default EmpCollection;
