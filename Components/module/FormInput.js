
const FormInput = ({name,value,labale,type,onChang}) => {
    return (
        <div className="form-input">
            <labale htmlFor={name}>{labale}</labale>
            <input name={name} value={value} type={type} onChange={onChang}/>
        </div>
    );
};

export default FormInput;