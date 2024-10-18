// react hooks là các hàm đặc biệt cho phép  bạn sử dụng các state và các tính năng khác của react mà không cần viết class 

import React, {useState} from 'react'

function Example () {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>Bạn đã nhấp {count} lần</p>
        <button onClick={() => setCount(count + 1)}>nhấp</button>
    </div>
  )
}

export default text