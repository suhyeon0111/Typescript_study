import {useState} from "react";
 

export default function CreateTodo() {

          const [value, setValue] = useState("");
          // 입력창 관리 함수
          const onChange = (event: React.FormEvent<HTMLInputElement>)=>{
            const{
              currentTarget:{value},
            } = event;
            setValue(value);
          };
          // 폼 제출 함수 
          const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault();
            console.log(value);
            setValue('');
          }; 

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={value} placeholder="입력하세요"/>
          <button>등록</button>
        </form> 
      </div>
  
    )
}

