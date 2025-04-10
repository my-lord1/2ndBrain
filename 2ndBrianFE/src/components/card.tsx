import { ShareIcon } from "../icons/ShareIcon"

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title, link, type}: CardProps) {
    return (
    <div>
        <div className="p-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl border border-purple-300 shadow-md max-w-72 min-w-72 min-h-60 flex flex-col justify-between transition-shadow hover:shadow-xl">
            <div className= "flex justify-between items-start mb-3">
                <div className="flex items-center text-base font-semibold text-black-900 gap-2">
                    <div className= "text-gray-500 pr-2">
                        <ShareIcon/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2">
                        <a href={link} target="_blank">
                            <ShareIcon/>
                        </a> 
                    </div>
                    <div className = "text-gray-500" >
                        <ShareIcon/>
                    </div>
                </div>
            </div>

            <div className="pt-4" >
                {type === "youtube" && (
                    <iframe className="w-full"
                        src={`https://www.youtube.com/embed/${new URL(link).searchParams.get("v")}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    )}

                {type === "twitter" && (
                <div className="w-full">
                    <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                    <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                    ></script>
                    </div>
                    )}
            </div>




        </div>
    </div> )


}


