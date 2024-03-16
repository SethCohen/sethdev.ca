import * as React from "react"

interface PortfolioItemProps {
    title: string
    timestamp: string
    thumbnail: string
    url: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, timestamp, thumbnail, url }) => {
    return (
        <a href={url} className="block">
            <div className="relative aspect-square overflow-hidden sm:rounded-lg">
                <img className="absolute inset-0 h-full w-full object-cover" src={thumbnail} alt={title} />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative px-3 py-3">
                    <h3 className="text-xl leading-6 font-bold text-white">
                        {title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm font-bold">
                        {timestamp}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default PortfolioItem