function Password(props) {
    return(
    <div>
        <h1>{props.h1}</h1>
        <div>
            <input type="checkbox" id="symbols" name="symbols" value="symbols" />
            Symbols (&, !, ? ...)
        </div>
        <div>
            <input type="checkbox" id="capital" name="capital" value="capital" />
            Capital letter (A, C, D, ...)
        </div>
        <div>
            <input type="checkbox" id="small" name="small" value="small"/>
            Small letter (a, c, d ...)
        </div>
        <div>
          <div>password lengh :</div>
          <div> choose beeween 1 and 12 characters </div>
          <input type="range" min={1} max={12} />
        </div>
        <button className="btn btn-alerte" onClick={getdata}>GENERATE</button>
    </div>
    )
}

function getdata() {
    
}

export default Password;
