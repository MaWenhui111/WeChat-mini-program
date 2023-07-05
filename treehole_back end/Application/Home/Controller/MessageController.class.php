<?php
namespace Home\Controller;

use Think\Controller;
class MessageController extends BaseController {
	//发布新内容
    public function publish_new_message()
    {
        //校验参数是否存在
        if(!$_POST['user_id'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：id';
            $this->ajaxReturn($return_data);
        }
        if(!$_POST['username'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：username';
            $this->ajaxReturn($return_data);
        }
        if(!$_POST['face_url'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：face_url';
            $this->ajaxReturn($return_data);
        }
        if(!$_POST['content'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：content';
            $this->ajaxReturn($return_data);
        }

        $Square=M('Square');

        //设置要插入的数据
        $data=array();
        $data['user_id']=$_POST['user_id'];    //用户id
        $data['username']=$_POST['username'];    //用户名
        $data['face_url']=$_POST['face_url'];    //用户头像
        $data['content']=$_POST['content'];    //发布内容
        $data['total_likes']=0;    //点赞数
        $data['send_timestamp']=time();    // 当前发布时间戳

        //插入数据
        $result=$Square->add($data);
        if($result)
        {
            $return_data=array();
            $return_data['error_code']=0;
            $return_data['msg']='数据添加成功';
            $this->ajaxReturn($return_data);
        }
        else
        {
            $return_data=array();
            $return_data['error_code']=2;
            $return_data['msg']='数据添加失败';
            $this->ajaxReturn($return_data);
        }


        dump($_POST);
    }

    //得到所有内容
    public function get_all_messages()
    {
       //实例化数据表
       $Square=M('Square');
       
       //设置查询条件

       //按照时间倒叙获取所有内容
       $all_messages=$Square->order('id desc')->select();
       //dump($all_messages);

       //将所有时间戳转化为2022-04=25 12：00：00
       foreach($all_messages as $key => $message)
       {
            $all_messages[$key]['send_timestamp']=date('Y-m-d H:i:s',$message['send_timestamp']);
       }
       $return_data=array();
       $return_data['error_code']=0;
       $return_data['msg']='数据获取成功';
       $return_data['data']=$all_messages;
       $this->ajaxReturn($return_data);
       //dump($all_messages);
    }

    //点赞接口
    public function do_like()
    {
        //校验参数
        if(!$_POST['message_id'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：message_id';
            $this->ajaxReturn($return_data);
        }
        if(!$_POST['user_id'])
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='参数不足：user_id';
            $this->ajaxReturn($return_data);
        }
        //dump($_POST);

        $Square=M('Square');

        //查询条件
        $where=array();
        $where['id']=$_POST['message_id'];
        $message=$Square->where($where)->find();

        //判断是否存在该条内容
        if(!$message)
        {
            $return_data=array();
            $return_data['error_code']=1;
            $return_data['msg']='指定的内容不存在';
            $this->ajaxReturn($return_data);
        }
        //dump($message);

        //构造要保存的数据
        $data=array();
        $data['total_likes']=$message['total_likes']+1;

        //构造要保存的条件
        $where=array();
        $where['id']=$_POST['message_id'];
        $result=$Square->where($where)->save($data);
        if($result)
        {
            $return_data=array();
            $return_data['error_code']=0;
            $return_data['msg']='数据保存成功';
            $return_data['data']['message_id']=$_POST['message_id'];
            $return_data['data']['total_likes']=$data['total_likes'];
            $this->ajaxReturn($return_data);
        }
        else
        {
            $return_data=array();
            $return_data['error_code']=2;
            $return_data['msg']='数据保存失败';
            $this->ajaxReturn($return_data);
        }


    }

}
