// 섹션 만들기
// function make_sec(sec_id) {
//     let list = `<div class="sec" id="${sec_id}">
//                     <div class="sec_title">${sec_id.toUpperCase()}</div>
//                     <div class="sec_body"></div>
//                 </div>`;

//     $('.content_area').append(list)
// }
function load_list(cate_idx, start_idx, show_qty) {
    let rs = ITEM_LIST[cate_idx];

    let tmp_qty = start_idx+show_qty;
    if(tmp_qty > rs.length) {
        tmp_qty = rs.length
    }
    for(let i=start_idx; i<tmp_qty; i++) {
        let list = `<div class="menu_list">
                        <div class="menu_item">
                        <a href="real_detail.html?cate=${cate_idx}&item=${rs[i].item_no}">
                            <img src="${rs[i].src}" alt="c">
                        </a>
                        <button class="menu_basket_btn"></button>
                        </div>
                        <div class="menu_txt">
                        <p class="p_name">${rs[i].title}</p>
                        <p class="p_sale">32%</p>
                        <p class="p_price">${rs[i].s_price}</p>
                        </div>
                    </div>`
            $(`.menu_box`).append(list);
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

    
   
const cate_arr = ['daily', 'skin', 'food', '채식구'];
