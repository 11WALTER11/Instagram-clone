// import React, { useState } from "react";

// const Story = () => {
//   const [stories, setStories] = useState([
//     {
//       id: 1,
//       user: "john_doe",
//       imageUrl: "https://example.com/story1.jpg",
//       viewed: false,
//     },
//     {
//       id: 2,
//       user: "jane_smith",
//       imageUrl: "https://example.com/story2.jpg",
//       viewed: false,
//     },
//     // Add more story objects here
//   ]);

//   const markStoryAsViewed = (storyId) => {
//     setStories((prevStories) =>
//       prevStories.map((story) =>
//         story.id === storyId ? { ...story, viewed: true } : story
//       )
//     );
//   };

//   return (
//     <div>
//       <h2>Stories</h2>
//       <div className="story-container">
//         {stories.map((story) => (
//           <div
//             key={story.id}
//             className={`story ${story.viewed ? "viewed" : ""}`}
//             onClick={() => markStoryAsViewed(story.id)}
//           >
//             <img src={story.imageUrl} alt={story.user} />
//             <span>{story.user}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Story;
