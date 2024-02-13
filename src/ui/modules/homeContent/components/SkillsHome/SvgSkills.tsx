import { SVG_PATH } from '../../constants/homeitems';

const SvgMap = ({ strokeBl, strokeGr }: { strokeBl: string; strokeGr: string }) => (
    <>
        {SVG_PATH.map((_, index) => (
            <>
                <svg key={index} xmlns={_.xmlns} width={_.width} height={_.height} viewBox={_.viewBox} fill={_.fill}>
                    <path
                        d={_.path.d}
                        stroke={_.path.stroke}
                        stroke-width={_.path['stroke-width']}
                        stroke-linecap={_.path['stroke-linecap']}
                    ></path>
                    <path
                        d={_.path.d2}
                        stroke={_.path.stroke}
                        stroke-width={_.path['stroke-width']}
                        stroke-linecap={_.path['stroke-linecap']}
                    ></path>
                    <path
                        d={_.path.d3}
                        stroke={_.path.stroke}
                        stroke-width={_.path['stroke-width']}
                        stroke-linecap={_.path['stroke-linecap']}
                    ></path>
                    <path
                        d={_.path.d4}
                        stroke={strokeBl}
                        stroke-width={_.path['stroke-width']}
                        stroke-linecap={_.path['stroke-linecap']}
                    ></path>
                    <path
                        d={_.path.d5}
                        stroke={strokeGr}
                        stroke-width={_.path['stroke-width']}
                        stroke-linecap={_.path['stroke-linecap']}
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

