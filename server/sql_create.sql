--ANSI编码
drop table suc_process;
drop table suc_request;
drop table suc_stuff;
drop table successor;
drop table suc_stuff_history;
drop sequence suc_id_seq;
CREATE TABLE successor(
	USER_ID VARCHAR2(64) PRIMARY KEY,
  username  VARCHAR2(64) NOT NULL,
  area_name VARCHAR2(32),
  dorm_name VARCHAR2(32)
	);
--如果物品被继承，加进历史，在这里清除，或者，物品被取消继承，直接删除，不保留信息，还要根据pic_url删除服务器图片
 CREATE TABLE suc_stuff(
	suc_id NUMBER(32) PRIMARY KEY,
    USER_ID VARCHAR2(64) NOT NULL,
  suc_title VARCHAR2(128),
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32),
  foreign key (user_id) references successor(user_id) on delete cascade
  );
  --完成继承
  CREATE TABLE suc_stuff_history(
	suc_id NUMBER(32) PRIMARY KEY,
    USER_ID VARCHAR2(64),
  suc_title VARCHAR2(128),
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32)
  );
  
 CREATE TABLE suc_request(
     suc_id NUMBER(32),
     user_id VARCHAR2(64),
     confirm_give_flag NUMBER(1),
     request_time VARCHAR2(32),
     primary key(suc_id,user_id), --一件物品可能被多个人申请
     foreign key (user_id) references successor(user_id) on delete cascade,
     --用户名一般不会被注销，删除，除非管理员操作
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);
--判断是否提醒用户，请求
--提醒 拥有者：如果，有人请求他的物品，并且请求flag等于0 拥有者只能回应一个请求，然后，自动拒绝其余人，设置flag为-1
--提醒 申请者：如果①他请求了，flag=-1，则通知用户他的这个请求被拒绝了
--                    ②他请求了，flag=0，则通知他，他的请求还没被响应
--                    ③他请求了，flag=1,则通知他，他的请求被响应了，并且返回，时间等信息。
 CREATE TABLE suc_process(
     suc_id NUMBER(32) PRIMARY KEY, --物品处于这个状态
     owner_spare_time_start VARCHAR2(32),
     owner_spare_time_end VARCHAR2(32),
     confirm_recv NUMBER(1),
     confirm_give NUMBER(1),
     complete_time VARCHAR2(32),
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);

--设置自增长的触发器suc_id
create sequence suc_id_seq increment by 1 start with 1;
-- create or replace 
    -- trigger trg_suc_stuff before insert on suc_stuff for each row 
    -- begin 
    -- select suc_id_seq.nextval into :new.suc_id from dual; 
    -- end;