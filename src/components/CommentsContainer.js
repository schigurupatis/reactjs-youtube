import React from "react";

const commentsData = [
  {
    name: "Username of the commenter",
    avatar: "https://avatar.iran.liara.run/public",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [
      {
        name: "1.1",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [
          {
            name: "1.1.1",
            avatar: "https://avatar.iran.liara.run/public",
            text: "This is a reply",
            replies: [],
          },
          {
            name: "1.1.2",
            avatar: "https://avatar.iran.liara.run/public",
            text: "This is a reply",
            replies: [],
          },
        ],
      },
      {
        name: "1.2",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
    ],
  },
  {
    name: "Username of the commenter",
    avatar: "https://avatar.iran.liara.run/public",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [],
  },
  {
    name: "Username of the commenter",
    avatar: "https://avatar.iran.liara.run/public",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: [
      {
        name: "1.1",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
      {
        name: "1.2",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, avatar, text, replies } = data;
  return (
    <div className="flex gap-3 my-2 border-l-2">
      <div>
        <img src={avatar} alt={name} className="w-10 rounded-full" />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
        {/* <p>{replies}</p> */}
        {/* Recursive rendering of replies */}
        {replies && replies.length > 0 && (
          <div className="ml-4 my-2">
            <h4 className="font-bold text-sm">Replies</h4>
            {replies.map((reply) => (
              <Comment key={reply.name} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, idx) => <Comment key={idx} data={comment} />);
};

const CommentsContainer = () => {
  return (
    <>
      {/* <Comment data={commentsData[1]} /> */}
      <CommentsList comments={commentsData} />
    </>
  );
};

export default CommentsContainer;
