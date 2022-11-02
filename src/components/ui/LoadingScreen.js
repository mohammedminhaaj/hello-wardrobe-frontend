import { Loader } from "react-feather";

const loadingTextList = [
    "Loading",
    "Ironing your clothes",
    "Looking for better clothes",
    "Cutting down the prices",
    "Improving your experience",
    "Cleaning your clothes",
    "Drying your clothes",
]

const LoadingScreen = () => {

    return (
        <div className="flex justify-center align-middle gap-2 font-thin">
            <h2>{loadingTextList[Math.floor(Math.random() * loadingTextList.length)]}, please wait </h2>
            <Loader className="animate-spin"/>
        </div>
    );

}

export default LoadingScreen;