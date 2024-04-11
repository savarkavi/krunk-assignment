import Message from "./Message";
import PopularTags from "./PopularTags";

const Chatbox = () => {
  return (
    <div className="p-4 mt-4 flex flex-col gap-4">
      <Message
        message="Hi Sam, I am your personal shopping assistent, how can I help you today?"
        time="4:45 PM"
        color="bg-[#E6EEFF]"
      />
      <Message
        message="Hi, I am looking for a handbag with long strap"
        time="4:46 PM"
        color="bg-[#DCF7C5]"
        className="self-end"
      />
      <PopularTags />
      <Message
        message="Or set filter and help us choose the best bag for you."
        time="4:48 PM"
        color="bg-[#E6EEFF]"
        withImage
      />
    </div>
  );
};

export default Chatbox;
