import { TailSpin } from "react-loader-spinner"
import { Div } from "./Loader.styled"
import { useIsLoading } from "context/contectxtHooks"

export function Loader() {
    const isLoading = useIsLoading().isLoading;

    return (<>
        {isLoading &&
            <Div>
                <TailSpin />
            </Div>
        }
        </>)
}