
const svgs = [
    {
        xmlns: "http://www.w3.org/2000/svg", width: 225, height: 20, viewBox: "0 0 225 20", fill: "none", path: {
            d: "M10 10H35",
            d2: "M55 10H80",
            d3: "M100 10H125",
            d4: "M145 10H170",
            d5: "M190 10H215",
            stroke: "black",
            "stroke-width": "2",
            "stroke-linecap": "round"
        }
    }
]

function SvgMap({ strokeBl, strokeGr }: { strokeBl: string, strokeGr: string }) {
    return (
        <>
            {svgs.map(i => {
                return (
                    <>
                        <svg xmlns={i.xmlns} width={i.width} height={i.height} viewBox={i.viewBox} fill={i.fill}>
                            <path d={i.path.d} stroke={i.path.stroke} stroke-width={i.path["stroke-width"]} stroke-linecap={i.path["stroke-linecap"]}></path>
                            <path d={i.path.d2} stroke={i.path.stroke} stroke-width={i.path["stroke-width"]} stroke-linecap={i.path["stroke-linecap"]}></path>
                            <path d={i.path.d3} stroke={i.path.stroke} stroke-width={i.path["stroke-width"]} stroke-linecap={i.path["stroke-linecap"]}></path>
                            <path d={i.path.d4} stroke={strokeBl} stroke-width={i.path["stroke-width"]} stroke-linecap={i.path["stroke-linecap"]}></path>
                            <path d={i.path.d5} stroke={strokeGr} stroke-width={i.path["stroke-width"]} stroke-linecap={i.path["stroke-linecap"]}></path>
                        </svg>
                    </>
                )
            })}
        </>
    )
}

export default function SvgSkills() {
    return (
        <div className="flex flex-col gap-[24px] md:pr-[5rem]">
            <SvgMap strokeBl="black" strokeGr="#D9D9D9" />
            <SvgMap strokeBl="black" strokeGr="#D9D9D9" />
            <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
            <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
            <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
            <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />

        </div>
    )
}
