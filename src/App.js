import "./App.css";
import Customer from "./components/Custimer";

function App() {
  const customers = [
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "홍길동",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/1",
      name: "연동근",
      birthday: "921212",
      gender: "남자",
      job: "취준생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/2",
      name: "데브리",
      birthday: "980422",
      gender: "여자",
      job: "대학원생",
    },
  ];

  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
