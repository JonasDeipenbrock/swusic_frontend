import * as React from 'react';

export default function Registration() {
    const [input, changeInput] = React.useState({
        name: undefined,
        mail: undefined,
        password: undefined,
    });

    function onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const newInput = input;
        newInput[name] = value;
        changeInput(newInput);
    }

    function submit() {
        alert('Submitted', input.name);
    }

    console.log(input);

    return (
        <div className='register-main'>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input type='text' value={input.name} onChange={onChange} />
                </label>
                <label>
                    Mail:
                    <input type='' value={input.mail} onChange={onChange} />
                </label>
                <input type='submit' name='Submit'></input>
            </form>
        </div>
    );
}
