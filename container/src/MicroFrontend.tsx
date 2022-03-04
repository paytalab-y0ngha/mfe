import  React,{useState,useEffect} from 'react'

function MicroFrontend(name:string, host:string, documnet:string) {
    const [scriptId, setScriptId] = useState("");
    
    useEffect(()=>{
        setScriptId("micro-frontend-sciprt-"+name);

        // if(document.getElementById(scriptId)){
        //     renderMicroFrontend();
        //     return;
        // }
        console.log("eee")
        fetch(`/api/service1`).then(res => {
            console.log("res" ,res);
        });

        // return unMount();
    },[]);

    // const unMount = () => {
    //     renderMicroFrontend();
    //     return window[`unmount${name}`](`${name}-container`);
    // }

    // const renderMicroFrontend = () => {
    //     window[`render${name}`](`${name}-container`, history);
    // }



    return (<div id = "11"></div>);

}

export default MicroFrontend;