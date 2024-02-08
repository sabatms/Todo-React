function MyVar() {
  const [my_name, setMyName] = useState("saba");

  //   console.log(my_name);

  return (
    <div>
      salam , {my_name}
      <button
        onClick={() => {
          setMyName("arsam");
        }}
      >
        Change name
      </button>
    </div>
  );
}
