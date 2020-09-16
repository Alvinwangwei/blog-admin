import React from 'react';
import './post.css'

import { 
    Form,
    Input,
} from 'antd';

export default class BlogPost extends React.Component {
    constructor (props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        title: '',
        summary: '',
        content: ''
    }
   
    handleChange(event: any) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className='blog-post'>
                <Form
                    className='blog-post-form'>
                        <Form.Item>
                            <Input
                                name='title'
                                addonBefore="文章标题" 
                                placeholder='title'
                                value={this.state.title}
                                onChange = {this.handleChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input.TextArea
                                rows={6} 
                                placeholder="文章摘要" 
                                name="summary"
                                value={this.state.summary}
                                onChange = {this.handleChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input.TextArea 
                                rows={6} 
                                placeholder="文章内容 markdown格式" 
                                name="content"
                                value={this.state.content}
                                onChange = {this.handleChange}
                            />
                        </Form.Item>
                </Form>
            </div>
        )
    }
}