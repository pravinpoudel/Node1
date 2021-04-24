const keyGenerate = [...Array(30)].map((value)=>{
                        return (Math.random()*36|0).toString(36);
                    }).join("");

console.log(keyGenerate);
