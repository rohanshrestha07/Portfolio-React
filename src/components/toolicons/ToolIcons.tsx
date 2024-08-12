import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';


export default function ToolIcons() {
    return (
        <>
            <div className="flex justify-around items-center absolute w-[1100px] h-20 bottom-0 ml-24 mt-16 px-3 border-2 rounded-3xl border-white">
                <HtmlIcon
                style={{
                    fontSize: '60px'
                }}/>
                <CssIcon 
                style={{
                    fontSize: '60px'
                }}/>
                <JavascriptIcon
                style={{
                    fontSize: '60px'
                }}/>
                <HtmlIcon
                style={{
                    fontSize: '60px'
                }}/>
                <CssIcon 
                style={{
                    fontSize: '60px'
                }}/>
                <JavascriptIcon
                style={{
                    fontSize: '60px'
                }}/>
            </div>
        </>
    )
}
