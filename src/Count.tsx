import * as React from 'react'

// import {withFoo} from "./with-foo";

type Props = {
    foo: string;
    initialCount?: number;
};

// const FuncCount = ({foo, initialCount = 0}: Props) => {
//     const [count, setCount] = React.useState(initialCount);

//     return <button onClick={() => setCount((count) => count + 1)}>
//         {foo} is {count}
//     </button>;
// };

type State = {
    count: number;
}

class ClassCount extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: props.initialCount || 0,
        };
    }

    render() {
        const {foo} = this.props;
        const {count} = this.state;

        return <button onClick={() => this.setState({count: count + 1})}>
            {foo} has {count}
        </button>;
    }
}

// const Count = withFoo(ClassCount);

export default ClassCount;
