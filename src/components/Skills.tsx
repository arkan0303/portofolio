// import React from "react";

// const Skills = () => {
//   const categories = [
//     {
//       title: "Frameworks & Libraries",
//       skills: [
//         { name: "React", icon: "⚛️" },
//         { name: "React Native", icon: "📱" },
//         { name: "Node.js", icon: "🟩" },
//         { name: "Express.js", icon: "🚀" },
//         { name: "Laravel", icon: "📜" },
//         { name: "Prisma", icon: "🧩" },
//       ],
//     },
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "JavaScript", icon: "🟨" },
//         { name: "TypeScript", icon: "🔷" },
//         { name: "Python", icon: "🐍" },
//         { name: "PHP", icon: "🐘" },
//         { name: "HTML", icon: "📄" },
//         { name: "CSS", icon: "🎨" },
//       ],
//     },
//     {
//       title: "CSS Frameworks",
//       skills: [
//         { name: "Bootstrap", icon: "🚀" },
//         { name: "Tailwind CSS", icon: "🎨" },
//         { name: "Material-UI (MUI)", icon: "💎" },
//         { name: "Chakra UI", icon: "✨" },
//         { name: "Ant Design", icon: "🏢" },
//         { name: "Styled-Components", icon: "🌟" },
//         { name: "Emotion", icon: "🔥" },
//       ],
//     },
//     {
//       title: "Tools & Databases",
//       skills: [
//         { name: "Git", icon: "🔧" },
//         { name: "Docker", icon: "🐳" },
//         { name: "Kubernetes", icon: "☸️" },
//         { name: "MongoDB", icon: "🍃" },
//         { name: "PostgreSQL", icon: "🐘" },
//         { name: "MySQL", icon: "💾" },
//       ],
//     },
//   ];

//   const sectionStyle = {
//     padding: "4rem 0",
//     backgroundColor: "#121212",
//     color: "#ffffff",
//     fontFamily: "Arial, sans-serif",
//   };

//   const containerStyle = {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "0 2rem",
//   };

//   const titleStyle = {
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     marginBottom: "3rem",
//     textAlign: "center",
//     color: "#4CAF50",
//   };

//   const categoryStyle = {
//     marginBottom: "2rem",
//   };

//   const categoryTitleStyle = {
//     fontSize: "1.8rem",
//     fontWeight: "bold",
//     marginBottom: "1rem",
//     color: "#FFD700",
//   };

//   const skillsGridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//     gap: "1.5rem",
//     alignItems: "start",
//   };

//   const skillItemStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     backgroundColor: "#1e1e1e",
//     borderRadius: "12px",
//     padding: "1.5rem",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   };

//   const skillItemHoverStyle = {
//     transform: "scale(1.1)",
//     boxShadow: "0 6px 15px rgba(0, 0, 0, 0.7)",
//   };

//   const skillIconStyle = {
//     fontSize: "3rem",
//     marginBottom: "1rem",
//     color: "#4CAF50",
//   };

//   const skillNameStyle = {
//     fontSize: "1.1rem",
//     fontWeight: "bold",
//     color: "#ffffff",
//   };

//   return (
//     <section id="skills" style={sectionStyle}>
//       <div style={containerStyle}>
//         <h2 style={titleStyle}>Skills & Expertise</h2>
//         {categories.map((category, index) => (
//           <div key={index} style={categoryStyle}>
//             <h3 style={categoryTitleStyle}>{category.title}</h3>
//             <div style={skillsGridStyle}>
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   style={skillItemStyle}
//                   onMouseEnter={(e) =>
//                     Object.assign(e.target.style, skillItemHoverStyle)
//                   }
//                   onMouseLeave={(e) =>
//                     Object.assign(e.target.style, skillItemStyle)
//                   }
//                 >
//                   <span style={skillIconStyle}>{skill.icon}</span>
//                   <span style={skillNameStyle}>{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

const Skills = () => {
  const categories = [
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "React Native",
          image: "https://static.cdnlogo.com/logos/r/18/react-native.svg",
        },
        {
          name: "Node.js",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Express.js",
          image: "https://img.icons8.com/?size=128&id=2ZOaTclOqD4q&format=png",
        },
        {
          name: "Nest.js",
          image:
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png",
        },
        {
          name: "Laravel",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        },
        {
          name: "Prisma",
          image: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902",
        },
        {
          name: "TypeScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
        },
        {
          name: "Python",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
        },
        { name: "PHP", image: "https://www.svgrepo.com/show/452088/php.svg" },
        // { name: "HTML", image: "/assets/icons/html.svg" },
        // { name: "CSS", image: "/assets/icons/css.svg" },
      ],
    },
    {
      title: "CSS Frameworks",
      skills: [
        {
          name: "Bootstrap",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png",
        },
        {
          name: "Tailwind CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
        },
        {
          name: "Material-UI (MUI)",
          image: "https://www.svgrepo.com/show/354048/material-ui.svg",
        },
        {
          name: "Chakra UI",
          image:
            "https://cdn.ui-tools.com/Content/images/3a85dc35-chakra-ui.jpg?width=210",
        },
        {
          name: "Daisy UI",
          image: "https://svgmix.com/uploads/7ea061-daisyui.svg",
        },
      ],
    },
    // skills: [
    //   //         { name: "Git", icon: "🔧" },
    //   //         { name: "Docker", icon: "🐳" },
    //   //         { name: "Kubernetes", icon: "☸️" },
    //   //         { name: "MongoDB", icon: "🍃" },
    //   //         { name: "PostgreSQL", icon: "🐘" },
    //   //         { name: "MySQL", icon: "💾" },
    //   //       ],
    {
      title: "Tools & Databases",
      skills: [
        {
          name: "Git",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/146px-Git_icon.svg.png?20220905010122g",
        },
        {
          name: "Docker",
          image: "https://www.svgrepo.com/show/349342/docker.svg",
        },
        {
          name: "MongoDB",
          image: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          name: "PostgreSQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain-wordmark.svg",
        },
        {
          name: "MySQL",
          image: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
        },
      ],
    },
  ];

  const sectionStyle = {
    padding: "4rem 0",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "3rem",
    textAlign: "center",
    color: "#4CAF50",
  };

  const categoryStyle = {
    marginBottom: "2rem",
  };

  const categoryTitleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#FFD700",
  };

  const skillsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    alignItems: "start",
  };

  const skillItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const skillImageStyle = {
    width: "48px",
    height: "48px",
    marginBottom: "1rem",
  };

  const skillNameStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#ffffff",
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Skills & Expertise</h2>
        {categories.map((category, index) => (
          <div key={index} style={categoryStyle}>
            <h3 style={categoryTitleStyle}>{category.title}</h3>
            <div style={skillsGridStyle}>
              {category.skills.map((skill) => (
                <div key={skill.name} style={skillItemStyle}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={skillImageStyle}
                  />
                  <span style={skillNameStyle}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
