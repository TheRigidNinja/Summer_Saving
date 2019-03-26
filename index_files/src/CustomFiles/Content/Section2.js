import React from 'react'

function Section2() {
  return (
    <section className="section2">
        <div className="cont">
            <ul className="rowCont1 row">
                <li className="child1 col-sm-3"></li>
                <li className="child2 col-sm-3">
                    <h3>T-SHIRTS</h3>
                    <h6>NEW STOCK</h6>
                </li>
                <li className="child3 col-sm-3"></li>
                <li className="child4 col-sm-3">
                    <h3>CLEARANCE</h3>
                    <h6>50% DISCOUNTS</h6>
                </li>
            </ul>
            <ul className="rowCont2 row">
                <li className="child1 col-sm-4"></li>
                <li className="child2 col-sm-8">
                    <h1>NEW SUMMER</h1><br/>
                    <h1 id="boldText">STOCK</h1><br/>
                    <h5>BEACH BODY</h5>
                    <button className="btn">VIEW COLLECTION</button>
                </li>
            </ul>
            <ul className="rowCont3 row">
                <li className="child1 col-sm-8">
                    <h1>DESIGNER MENS</h1><br/>
                    <h1 id="boldText">SUITS</h1>
                    <h3>GREAT DEALS</h3>
                    <button className="btn">VIEW COLLECTION</button>
                </li>
                <li className="child2 col-sm-4">
                    <h5>SUMMER SPECIALS</h5>
                    <h1>STRIPY</h1>
                    <h1 id="boldText">TOPS</h1>
                    <br/>
                    <br/>

                    <h5>YES PLEASE</h5>
                    <img src="##" alt="Arrow"/>
                </li>
            </ul>
        </div>
    </section>
  )
}
export default Section2
