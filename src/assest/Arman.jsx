import React from "react"
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export default function Arman() {
    let tlt = gsap.timeline()
    tlt.addLabel("step1", 0)
    tlt.addLabel("step2", 0.2)
    tlt.addLabel("step3", 0.4)
    tlt.addLabel("step4", 0.6)
    tlt.addLabel("step5", 0.8)
    tlt.addLabel("step6", 1)
    tlt.addLabel("step7", 1.2)
    tlt.addLabel("step8", 1.4)
    tlt.addLabel("step9", 1.6)
    tlt.addLabel("step10", 1.8)

    function textChange() {
        tlt.to("#aa", { duration: 0.5, opacity: 0, y: -35 }, "step1")
        tlt.to("#vv", { duration: 0.5, opacity: 1, y: 44 }, "step1")

        tlt.to("#ar", { duration: 0.5, opacity: 0, y: -35 }, "step2")
        tlt.to("#vi", { duration: 0.5, opacity: 1, y: 44 }, "step2")

        tlt.to("#am", { duration: 0.5, opacity: 0, y: -35 }, "step3")
        tlt.to("#vv2", { duration: 0.5, opacity: 1, y: 44 }, "step3")

        tlt.to("#aa2", { duration: 0.5, opacity: 0, y: -35 }, "step4")
        tlt.to("#va", { duration: 0.5, opacity: 1, y: 44 }, "step4")

        tlt.to("#an", { duration: 0.5, opacity: 0, y: -35 }, "step5")
        tlt.to("#vl", { duration: 0.5, opacity: 1, y: 44 }, "step5")
        tlt.to("#vd", { duration: 0.5, opacity: 1, y: 44 }, "step6")
        tlt.to("#vi2", { duration: 0.5, opacity: 1, y: 44 }, "step7")
        tlt.to("#v4", { duration: 0.5, opacity: 1, y: 44 }, "step8")
        tlt.to("#v1", { duration: 0.5, opacity: 1, y: 44 }, "step9")
        tlt.to("#v2", { duration: 0.5, opacity: 1, y: 44 }, "step10")

        tlt.restart()
    }
    function textReverse() {
        tlt.reverse()

    }
    return (
        <div className="armanSvg">

            <svg id="svgArman" xmlns="http://www.w3.org/2000/svg" width="240" height="100" viewBox="0 0 240 100"
                fill="none" onPointerEnter={textChange} onPointerLeave={textReverse}
            >


                <g transform="translate(70 ,10)" opacity="1">
                    <a href="https://github.com/vivaldi412" target="_blank" rel="nofollow noopener noreferrer">
                        <text id="aa" x={0} y={44} className="armanSvgText">A</text>
                        <text id="ar" x={22} y={44} className="armanSvgText">r</text>
                        <text id="am" x={36} y={44} className="armanSvgText">m</text>
                        <text id="aa2" x={65} y={44} className="armanSvgText">a</text>
                        <text id="an" x={83} y={44} className="armanSvgText">n</text>
                    </a>
                </g>
                <g transform="translate(35 ,10)">
                    <a href="https://github.com/vivaldi412" target="_blank" rel="nofollow noopener noreferrer">
                        <text id="vv" x={0} y={0} className="armanSvgText" opacity="0" >v</text>
                        <text id="vi" x={20} y={0} className="armanSvgText" opacity="0" >i</text>
                        <text id="vv2" x={30} y={0} className="armanSvgText" opacity="0" >v</text>
                        <text id="va" x={50} y={0} className="armanSvgText" opacity="0" >a</text>
                        <text id="vl" x={70} y={0} className="armanSvgText" opacity="0" >l</text>
                        <text id="vd" x={80} y={0} className="armanSvgText" opacity="0" >d</text>
                        <text id="vi2" x={101} y={0} className="armanSvgText" opacity="0" >i</text>
                        <text id="v4" x={113} y={0} className="armanSvgText" opacity="0" >4</text>
                        <text id="v1" x={135} y={0} className="armanSvgText" opacity="0" >1</text>
                        <text id="v2" x={154} y={0} className="armanSvgText" opacity="0" >2</text>
                    </a>
                </g>
            </svg>
        </div >
    )
}