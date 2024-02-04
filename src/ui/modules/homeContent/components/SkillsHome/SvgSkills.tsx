import { SVG_PATH } from '../../constants/homeitems';

const SvgMap = ({ strokeBl, strokeGr }: { strokeBl: string; strokeGr: string }) => (
    <>
        {SVG_PATH.map((i) => (
            <>
                <svg xmlns={i.xmlns} width={i.width} height={i.height} viewBox={i.viewBox} fill={i.fill}>
                    <path
                        d={i.path.d}
                        stroke={i.path.stroke}
                        stroke-width={i.path['stroke-width']}
                        stroke-linecap={i.path['stroke-linecap']}
                    ></path>
                    <path
                        d={i.path.d2}
                        stroke={i.path.stroke}
                        stroke-width={i.path['stroke-width']}
                        stroke-linecap={i.path['stroke-linecap']}
                    ></path>
                    <path
                        d={i.path.d3}
                        stroke={i.path.stroke}
                        stroke-width={i.path['stroke-width']}
                        stroke-linecap={i.path['stroke-linecap']}
                    ></path>
                    <path
                        d={i.path.d4}
                        stroke={strokeBl}
                        stroke-width={i.path['stroke-width']}
                        stroke-linecap={i.path['stroke-linecap']}
                    ></path>
                    <path
                        d={i.path.d5}
                        stroke={strokeGr}
                        stroke-width={i.path['stroke-width']}
                        stroke-linecap={i.path['stroke-linecap']}
                    ></path>
                </svg>
            </>
        ))}
    </>
);

export const SvgSkills = () => (
    <div className="flex-M gap-[24px] md:pr-[5rem]">
        <SvgMap strokeBl="black" strokeGr="#D9D9D9" />
        <SvgMap strokeBl="black" strokeGr="#D9D9D9" />
        <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
        <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
        <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
        <SvgMap strokeBl="#D9D9D9" strokeGr="#D9D9D9" />
    </div>
);

