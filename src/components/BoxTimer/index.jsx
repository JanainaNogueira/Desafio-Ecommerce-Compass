import {useState,useEffect} from 'react'
import Styles from './index.module.css'

function BoxTimer(props){
    const [time,setTime] = useState({
        setDay:3,
        setHour:2,
        setMinute:5,
        setSec:5,
    });
    const [reset,setReset]=useState(false)
    function changeTime(){
        setTime({...time,setSec:time.setSec-1})
        setReset(true)
        
        console.log('aqui '+ reset)
        console.log('=======')
        console.log(time.setSec)
        if(time.setSec == 0){
            setTime({
                ...time,
                setMinute:time.setMinute-1,
                setSec:5,
            })
            if(time.setMinute==0){
                setTime({
                    ...time,
                    setMinute:5,
                    setHour:time.setHour-1
                })
                if(time.setHour==0){
                    setTime({
                        ...time,
                        setHour:2,
                        setDay:time.setDay-1
                    })
                    if(time.setDay==0){
                        setTime({
                            setSec:5,
                            setMinute:59,
                            setHour:24,
                            setDay:3,
                            reset:true
                        })
                    }
                }
            }
        }
    }
    if(isValid==true){
        setInterval(changeTime,1000)
    }
    
    
    
    return(
        <div className={Styles.contador}>
                    <div>
                        <p>{time.setDay}</p>
                        <p>Dias</p>
                    </div>
                    <div>
                    <p>{time.setHour}</p>
                    <p>Horas</p>
                </div>
            <div>
                <p>{time.setMinute}</p>
                <p>Minutos</p>
            </div>
            <div>
                <p>{time.setSec}</p>
                <p>Segundos</p>
            </div>
        </div>
    )
}

export default BoxTimer