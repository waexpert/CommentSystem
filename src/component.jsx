// import axios from 'axios';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// export default function MyComponent() {
//   // const { id } = useParams();
//   const [comment, setComment] = useState("");



// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const query = useQuery();
// const name = query.get('name');
// const number = query.get('number');
// const id = query.get('id');

//   const submitHandle = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://webhooks.wa.expert/webhook/68035e9e5e36e1bf94c76ca9", {
//         name: name,
//         comment: comment,
//         number:number,
//         id : id
//       });
//       alert("Submitted!");
//     } catch (err) {
//       alert("Submission failed.");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandle}>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }


import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MyComponent() {
  const [comment, setComment] = useState("");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const name = query.get('name');
  const number = query.get('number');
  const id = query.get('id');

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://webhooks.wa.expert/webhook/6809ce311f9f7b05383d03fa", {
        name: name,
        comment: comment,
        number: number,
        id: id
      });
      alert("Submitted!");
    } catch (err) {
      alert("Submission failed.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Please Enter Comment</h2>
      <form onSubmit={submitHandle} style={styles.form}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment here..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4388c1',
    color: '#fff',
    cursor: 'pointer'
  }
};
