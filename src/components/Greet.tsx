type greetProps = {
  name: string;
  messageCount: number;
};

export const Greet = (props: greetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        Welcome {props.name}, you have {messageCount} unread messages
      </h2>
    </div>
  );
};
