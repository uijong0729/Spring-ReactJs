import styled from "styled-components"
import { Card } from './../../card/Card';
import { UserIconWithName } from './../../molecules/user/UserIconWithName';
import { memo } from 'react';

// memo로 감싸면 해당 컴포넌트의 변화가 없는한 다시 렌더링되지 않는다.
export const UserCard = memo((props) => {
    const {user} = props;

    return (
        <Card>
            <UserIconWithName img={user.img} name={user.name} />
            <SDl>
                <dt>메일</dt>
                <dd>{user.email}</dd>

                <dt>전화번호</dt>
                <dd>{user.phone}</dd>

                <dt>부서</dt>
                <dd>{user.department.name}</dd>
            </SDl>
        </Card>
    )
});

const SDl = styled.dl`
    margin-bottom: 0px;
    text-align: left;

    dt {
        float: left;
    }

    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-warp: break-word;
    }
`