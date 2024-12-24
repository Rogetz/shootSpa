

export default function Loading(){
    return(
        <div className="text-white dark:bg-black dark:text-slate-600 w-12/12 min-h-screen overflow-x-hidden  bg-white">
            <div className="flex mb-48 h-auto w-auto ">
                {/*the wrapper with the scrolling changing text in the flex container*/}
                {/*size is for both width  height,for specifics use width with fraction*/}
                {/*for text-black you don't specify the opacity 
                The padding moves  double e.g know that p-6 is same as padding 1.5rem but p-18 doesn't work*/}
                <div className="flex z-10 animate-pulse lg:drop-shadow-none drop-shadow-sm bg-white dark:bg-black dark:text-slate-600 opacity-90 flex-col gap-y-4 px-6 md:pl-12 text-4xl md:text-7xl w-full lg:w-4/12 md:ml-16 mt-16 h-3/4 lg:h-auto text-black ">
                </div>
            </div>
        </div>
    )
}