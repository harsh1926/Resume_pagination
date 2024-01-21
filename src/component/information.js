import './inform.css';

function infos({Name,Description,location,skill1,skill2,skill4,skill3}){
    return(
        <>
            <div className="infoFirst">
                <div className="heros">{Name}</div>
                <div className="herosDesc">{Description}</div>
                <div className="heroSkills">
                    <button>{skill1}</button>
                    <button>{skill2}</button>
                    <button>{skill3}</button>
                    <button>{skill4}</button>
                </div>
            </div>
        </>
    );
}

export default infos;