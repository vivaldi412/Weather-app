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


gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);


export default function SvgLineBorder(props) {

    let tl2 = gsap.timeline();
    tl2.addLabel("stepr1", 0)
    tl2.addLabel("stepr2", 0.5)

    function run2() {
        tl2.to(`#rectborder1${props.number}`, { width: "100%", duration: 0.5 }, "stepr1")
        tl2.to(`#rectborder2${props.number}`, { height: "100%", duration: 0.5 }, "stepr1")
        tl2.to(`#rectborder3${props.number}`, { height: "100%", duration: 0.5 }, "stepr2")
        tl2.to(`#rectborder4${props.number}`, { width: "100%", duration: 0.5 }, "stepr2")
        tl2.restart()
    }
    function handleMouse2() {
        tl2.reverse()
    }
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`}
                fill="none" className="svgborder" onPointerEnter={run2} onPointerLeave={handleMouse2}
            >
                <rect id={`rectborder1${props.number}`} rx={5} width="0" height="7" fill="#f5f5f5" ></rect>
                <rect id={`rectborder2${props.number}`} rx={5} width="7" height="0" fill="#f5f5f5" ></rect>
                <rect id={`rectborder3${props.number}`} rx={5} width="7" height="0" fill="#f5f5f5" x={props.width - 7} y="0"></rect>
                <rect id={`rectborder4${props.number}`} rx={5} width="0" height="7" fill="#f5f5f5" x="0" y={props.height - 7}></rect>
            </svg>
        </div>
    )
}




