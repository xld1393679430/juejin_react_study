import styled from 'styled-components'
import { useRef } from 'react';

const Container = styled.div`
    width: 260px;
    height: 200px;
    border: 1px solid skyblue;
    overflow: auto;
`

const Back = styled.div`
    width: 40px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-weight: 700;
    background-color: skyblue;
    cursor: pointer;
    user-select: none;

    position: sticky;
    top: -60px;
    right: 20px;
    transform: translateY(200px);
    float: right;
    
`

const Index = () => {

    const containerRef = useRef(null)
    const handleTop = () => {
        containerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Container ref={containerRef}>
            <p>CSS sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部</p>

            {/* 这里注意需要将Back 放在前面，不然没法触发粘性定位 */}
            <Back onClick={handleTop}>Top</Back>


            <article>1_sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部</article>
            <article>2_sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部</article>
            <article>3_sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部</article>
            <article>4_sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部sticky实现返回顶部</article>

        
        </Container>
    )
}

export default Index