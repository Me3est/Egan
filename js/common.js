// 섹션 만들기
function make_sec(sec_id) {
    let list = `<div class="sec" id="${sec_id}">
                    <div class="sec_title">${sec_id.toUpperCase()}</div>
                    <div class="sec_body"></div>
                </div>`;

    $('.content_area').append(list)
}
function load_list(cate_idx, start_idx, show_qty) {
    let rs = ITEM_LIST[cate_idx];

    let tmp_qty = start_idx+show_qty;
    if(tmp_qty > rs.length) {
        tmp_qty = rs.length
    }
    for(let i=start_idx; i<tmp_qty; i++) {
        let list = `<div class="item_box">
                        <div class="item_img">
                            <a href="deal.html?cate=${cate_idx}&item=${rs[i].item_no}">
                                <img src="${rs[i].src}" alt="">
                                <img src="${rs[i].coverd_src}" alt="">
                            </a>
                        </div>
                        <div class="item_info">
                            <div class="item_opt"> 
                            </div>
                            <div class="item_title">${rs[i].title}</div>
                            <div class="item_desc">${rs[i].desc}</div>
                            <div class="line"></div>
                            <div class="item_s_price">${Number(rs[i].s_price).toLocaleString('ko-KR')}</div>
                            <span class="item_o_price"><del>${Number(rs[i].o_price).toLocaleString('ko-KR')}</del></span>
                        </div>
                    </div>`

                   
            $(`#${cate_arr[cate_idx]} > .sec_body`).append(list);
            // main_opt(cate_idx);
           
            

    }
    
    for(let j=0; j<rs.length; j++) {
        let rs2 = ITEM_LIST[cate_idx][j]
        var op_color = rs2.opt_color.split(",");

        console.log("op_color: " + op_color);

        for(let h=0; h<3; h++) {
            let list2 = `<div class="opt_color" style="background-color:${op_color[h]}"></div>`
            // $('.item_opt').eq(j).append(list2);
            $(`#${cate_arr[cate_idx]}  .item_opt`).eq(j).append(list2);
        }
    }
}
function get_url_info(key) {
    let url = location.href;
    url = url.split("?");

    if(url.length > 1) {
        url = url[1];
        url = url.split("&");

        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == key) {
                return tmp_url[1]
            }
        }
        return -1;
    }
}

    
   
const cate_arr = ['best', 'top', 'bot', 'new'];
