// 부모 요소 선택
const list = document.querySelectorAll('.textlist');
// 부모의 자식 요소 선택 ( textbox 선택을 위함 )

// 스크롤 할 때 좌표값
window.addEventListener("scroll", (e) => {
    // ViewPort의 Y값
    const scrollY = this.scrollY;
    console.log(scrollY);


    // 이벤트를 실행시킬 Y좌표값
    // 노트북 1896
    if (scrollY == 1848) {
        for (var i = 0; i < 4; i++) {
            const graph = document.getElementsByClassName('graph')[i];
            graph.id = 'graph' + i
        }
    } else {
        for (var i = 0; i < 4; i++) {
            const graph = document.getElementsByClassName('graph')[i];
            graph.id = 'x'
        }
    }
    // 노트북 952
    if (scrollY == 928) {
        // 아이디 변경
        // for문을 반복해 아이디를 변경하고 i값을 이용한 애니메이션 실행
        for (var i = 0; i < 4; i++) {
            const edit = document.getElementsByClassName('textarea')[i];
            edit.id = 'num' + i
        }

        // Y좌표값 952를 벗어났을 때 아이디를 본래 x로 변경 ( 애니메이션 재생을 방지 )
    } else {
        for (var i = 0; i < 4; i++) {
            const edit = document.getElementsByClassName('textarea')[i];
            edit.id = 'x'
        }

    }
})

