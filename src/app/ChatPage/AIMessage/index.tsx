interface AITextProp {
    text: string
}

const AiMessage: React.FC<AITextProp> = ({ text }) => {
    return (
        <div className="w-[60%] flex flex-col">
            <span className="text-lg font-semibold">Analyzing Complete</span>
            <div className="bg-white border-4 border-black rounded-xl text-lg px-4 py-3 w-fit"
                dangerouslySetInnerHTML={{ __html: text }}>
            </div>
        </div>
    );
}

export default AiMessage;