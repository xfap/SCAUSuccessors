--================================browse================================                
--********************
-- --STYPE:browse
-- 其他参数：null
--              data：{
                -- stype："browse",
                -- }
-- ********************
-- 返回的数据：
        -- {
        -- re_type:browse
        -- content:[
            -- {
                -- suc_id:"",
                -- user_id:"",
                -- suc_title:"",
                -- suc_intro:"",
                -- suc_pic_url:"",
                -- suc_class:"",
                -- suc_publish_time:""
            -- },
            -- {},
            -- {},
            -- ...(20个)
        -- ]
        -- }
select * from
    (
        select * from suc_stuff 
        --搜索出已经被接受请求的物品id，就不返回显示了
        where suc_id not in
        (
            select suc_id from suc_request where confirm_give_flag=1
        ) 
        order by to_number(suc_publish_time) desc
    )where rownum<20;--//搜索前20条
-- ================================browse================================   

-- =============================browse_refresh===============================     
-- TYPE:browse_refresh
-- 其他参数：
            -- suc_class 类别
            -- suc_id (当前本地的最后一条物品id，也就是显示在最下面的物品id)    
                
-- ******************************
    --suc_id,USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time    
with order_list as
    (
        select rownum r,suc_id,USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time
        from suc_stuff 
        --搜索出已经被接受请求的物品id，就不返回显示了
        where suc_id not in
        (
            select suc_id from suc_request where confirm_give_flag=1
        )
        order by to_number(suc_publish_time) desc
    ),
    x as 
    (select rownum rr from
        order_list
        where suc_id='2')
select r,suc_id,suc_publish_time from
  order_list
  where r between (select rr from x) and ((select rr from x)+20)
;
-- =============================browse_refresh===============================  
-- =============================browse_refresh_class======================================     
-- TYPE:browse_refresh_class 
-- 其他参数： 
			-- suc_class    //用户选择的物品类别
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:browse_refresh_class,
                -- content:[
            -- {
                -- suc_id:"",
                -- suc_title:"",
                -- suc_intro:"",
                -- suc_pic_url:"",
                -- suc_class:"",
                -- suc_publish_time:""
            -- },
            -- {},
            -- {},
            -- ...(20个)
        -- ]
			-- }
    select * from
    (
        select * from suc_stuff 
        --搜索出已经被接受请求的物品id，就不返回显示了
        where suc_id not in
        (
            select suc_id from suc_request where confirm_give_flag=1
        ) and suc_class=''
        order by to_number(suc_publish_time) desc
    )where rownum<20;--//搜索前20条
-- ============================browse_refresh_class=======================================   

-- =============================first_login======================================
-- TYPE:first_login 
-- 其他参数： 
			-- user_id
            -- username
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:first_login,
				-- flag:""
				
            -- }
    insert into successor values(user_id,username,null,null);
-- =============================first_login======================================
        
-- =============================login======================================     
-- TYPE:login 
-- 其他参数： 
			-- user_id
-- *********************************************
 --！！！！！加入服务器 online表，     检查successor表里面有没有这个人   
 -- 
-- *********************************************
/* 返回的数据：
            {
                re_type:login，
				username:"",
				area_name:"",
				dorm_name:"",
                // //服务器在用户登录的时候，发送这连个flag
				// comfirm_give_flag:"" //对应需求者，所有者是否同意给用户这个物品
				// nedd_flag:""//对应于所有者，向所有者通知，在他离线的这段时间里，是否有人确认需要他的书
                confirm_info:[
                        {
                        suc_id:"",
                        user_id:"",
                        username:"",
                        owner_spare_time_start:"",
                        owner_spare_time_end:""
                        },
                        ...
                    ]
                need_info:[
                            {user_id:"",   //需求者id
                            username:"",  //需求者的姓名
                            suc_id:""     //物品id  //详细信息用suc_id STYPE=getInfo 获取
                            confirm_give_flag："",  //如果这个是1 则 用户已经确认并且填写了 空闲时间，就可以读取下面的时间，
                            //否则为0，用户已经同意，则把下面时间显示出来
                            my_spare:{start:"",//我的空闲时间
                                      end:""},
                            //还要判断，物品 是否已经完成了 继承
                            confirm_recv:"" 
                            confirm_give:""  //这两个任何一个位1 则已经完成继承，都为0 则没有完成
                            complete_time:"" //完成的时间，如果上面两个有一个为1，这个才是时间，否则为 空
                            },   
                            ...
                          ]  
            } */
    select * from successor where user_id=user_id
    confirm_info:
        --找到这个人的请求的信息，如果被所有者确认 1
        select * from  suc_request natural join suc_process where confirm_give_flag=1;
    need_info：
        --找到这个人的物品所有id，如果有被请求的。
        select * from  
  suc_request natural join suc_process natural join (select user_id owner,suc_id from suc_stuff)
  where owner='test_usrid_2';
-- *********************************************
    
-- ============================login=======================================       

-- =============================login_need--舍弃======================================     
-- TYPE:login_need
-- 其他参数： 
			-- user_id
-- *********************************************
   --insert into suc_request values(user_id,suc_id)
-- ============================login_need======================================= 


-- =============================login_confirm--舍弃======================================     
-- TYPE:login_confirm
-- 其他参数： 
			-- user_id
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:login_confirm
				-- //所有方的选定时间段
				-- confirm_info:[
                        -- {
                        -- suc_id:"",
                        -- user_id:"",
                        -- username:"",
                        -- owner_spare_time_start:"",
                        -- owner_spare_time_end:""
                        -- },
                        -- ...
                    -- ]
            -- }
-- ============================login_confirm======================================= 


				


-- =============================getInfo======================================     
-- TYPE:getInfo 
-- 其他参数： 
			-- suc_id
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:getInfo,
                -- suc_id:"",
                -- username:"",
                -- suc_title:"",
                -- suc_intro:"",
                -- suc_pic_url:"",
                -- suc_class:"",		//详情页有放标签则返回，否则不需要返回
                -- suc_publish_time:""
			-- }
        select * from suc_stuff where suc_id=suc_id 
        union 
        select * from suc_stuff_history where suc_id=suc_id 
-- ============================getInfo=======================================   




-- =============================search======================================     
-- TYPE:search 
-- 其他参数： 
			-- key //用户搜索的关键字
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:search,
                -- content:[
				-- {
                -- suc_id:"",    
                -- suc_title:"", 
                -- suc_intro:"", 
                -- suc_pic_url:"",
                -- suc_class:"",
                -- suc_publish_time:""
				-- },
            -- {},
            -- {},
            -- ...(n个)//返回包含关键字的继承物品信息
			-- }
            
        select * from suc_stuff
            where suc_title like %key%;
-- ============================search=======================================   

-- =============================upload======================================     
-- TYPE:upload 
-- 其他参数： 
            -- user_id
			-- suc_title
            -- suc_intro
            -- suc_class
            -- publish_time
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:upload,
                -- suc_id:"",//上传该继承品的id
				-- upload_flag:"",//是否上传成功
			-- }
-- ============================upload=======================================   
-- //文件 即图片的上传是用另一个方法上传的
-- =============================upload_pic======================================     
-- TYPE:upload 
-- 其他参数： 
            -- user_id
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:upload_pic,
				-- upload_pic_flag:"",//是否上传成功
			-- }
-- ============================upload_pic======================================= 

-- =============================delete======================================     
-- TYPE:delete 
-- 其他参数： 
			-- suc_id
            -- user_id
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:delete,
				-- delete_flag:"",//是否删除成功
			-- }
-- ============================delete=======================================   

-- =============================modify======================================     
-- TYPE:modify 
-- 其他参数： 
            -- user_id
			-- suc_id  //物品原来的id，不能更改
			-- suc_title
            -- suc_intro
            -- modify_pic_flag //1：表示图片没有修改，0：表示图片修改了
            -- suc_class
            -- re_publish_time
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:modify,
				-- modify_flag:"",//是否修改成功
			-- }
-- ============================modify=======================================   
-- //文件 即图片的上传是用另一个方法上传的
-- =============================modify_pic======================================     
-- TYPE:modify 
-- 其他参数： 
            -- user_id
            -- scu_id
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:modify_pic,
				-- modify_pic_flag:"",//是否修改成功
			-- }
-- ============================modify_pic=======================================  

-- =============================need======================================     
-- TYPE:need 
-- 其他参数： 
			-- user_id//需求者id
			-- suc_id//需要继承物品id
            -- need_time//需求者确认需要的时间
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:need,
				-- need_flag:"",//请求是否发送成功
			-- }
-- ============================need=======================================   

-- =============================confirmNeed======================================     
-- TYPE:confirmNeed 
-- 其他参数： 
			-- user_id//所有者id
			-- suc_id//需要继承物品id
			-- owner_spare_time_start
			-- owner_spare_time_end
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:confirmNeed,
				-- confirm_flag:"",//是否发送成功
			-- }
-- ============================confirmNeed======================================= 

-- =============================haveGot======================================     
-- TYPE:haveGot 
-- 其他参数： 
			-- suc_id
            -- complete_time
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:haveGot
				-- haveGot_flag:""//是否发送成功
			-- }
-- ============================haveGot=======================================   

-- =============================haveGiven======================================     
-- TYPE:haveGiven 
-- 其他参数： 
			-- suc_id
            -- complete_time
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:haveGiven
				-- haveGiven_flag:""//是否发送成功
			-- }
-- ============================haveGiven=======================================   

-- =============================address======================================     
-- TYPE:address 
-- 其他参数： 
			-- user_id
            -- area_name
            -- dorm_name
-- *********************************************
-- 返回的数据：
            -- {
                -- re_type:haveGiven
				-- haveGiven_flag:""//是否发送成功
			-- }
-- ============================haveGiven=======================================  
