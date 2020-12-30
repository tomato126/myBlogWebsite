import service from '@/network/index'


//首页展示页面
export function getHomeArticleList () {
    return service.get('/article/getArticleList')
}

//首页展示页面
export function getCategoryList () {
    return service.get('/tag/getTagName')
}

//发布博客
export function postBlog (params) {
	return service.post('/article/add', {
		id: params.id,
		artTitle: params.title,
		category: params.category,
		tag: params.tag,
		content: params._posts,
		postdata: params.postDate,
		viewNumber: params.viewNumber || 0,
		status: 1
	})
}

//博客详情
export function getBlogDetail (params) {
	return service.get('/article/getDetail?id=' + params.id)
}

//编辑博客
export function editBlog (params) {
	return service.post('/article/edit', {
		id: params.id,
		artTitle: params.title,
		category: params.category,
		tag: params.tag,
		content: params._posts,
		postdata: params.postDate,
		viewNumber: params.viewNumber || 0,
		status: 1
	})
}

//删除博客
export function deleteBlog (params) {
	return service.post('/article/delete', {
		id: params.id
	})
}