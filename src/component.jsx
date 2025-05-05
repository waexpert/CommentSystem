// import axios from 'axios';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function MyComponent() {
//   const [comment, setComment] = useState("");

//   function useQueryObject() {
//     const searchParams = new URLSearchParams(useLocation().search);
//     const queryObj = {};
//     for (const [key, value] of searchParams.entries()) {
//       queryObj[key] = value;
//     }
//     return queryObj;
//   }

//   const queryData = useQueryObject();

//   const submitHandle = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         ...queryData,
//         comment,
//       };

//       await axios.post("https://webhooks.wa.expert/webhook/6809ce311f9f7b05383d03fa", payload);

//       alert("Submitted!");
//     } catch (err) {
//       alert("Submission failed.");
//       console.error(err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <img src="/logo.png" alt="logo" style={{width:"22rem" ,height:"auto"}}/>
//       <h2 style={styles.heading}>Please Enter Comment</h2>
//       <form onSubmit={submitHandle} style={styles.form}>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Type your comment here..."
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#333'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   input: {
//     padding: '10px',
//     fontSize: '16px',
//     marginBottom: '15px',
//     borderRadius: '5px',
//     border: '1px solid #ccc'
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#4388c1',
//     color: '#fff',
//     cursor: 'pointer'
//   }
// };


import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Comment submission component with form handling
 */
export default function CommentForm() {
  const [comment, setComment] = useState("");
  const queryData = useQueryObject();
  const [submitted,setSubmitted] = useState(false);

  /**
   * Custom hook to extract query parameters into an object
   */
  function useQueryObject() {
    const searchParams = new URLSearchParams(useLocation().search);
    const queryObj = {};
    
    for (const [key, value] of searchParams.entries()) {
      queryObj[key] = value;
    }
    
    return queryObj;
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const payload = {
        ...queryData,
        comment,
      };

      await axios.post(
        "https://webhooks.wa.expert/webhook/6809ce311f9f7b05383d03fa", 
        payload
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <img 
        src="/logo.png" 
        alt="logo" 
        style={styles.logo}
      />
      
      <h2 style={styles.heading}>
        Please Enter Comment / Notes
      </h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type here..."
          style={styles.input}
        />
        
        <button 
          type="submit" 
          style={styles.button}
        >
          Submit
        </button>
      </form>
      {submitted ? <p style={{color:'green'}}>Submitted successfully. 
      Thank you.</p> :""}
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '22rem',
    height: 'auto',
    marginBottom: '1rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'border 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4388c1',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: '500',
  }
};