<template>
	<div>
		<el-breadcrumb separator="/" v-for="(item, index) in $route.meta" :key="index">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>{{ item.title }}</el-breadcrumb-item>
			<el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 商品分类 -->

		<!-- 卡片 -->
		<el-card class="box-card">
			<div>
				<!-- 添加分类按钮 -->
				<el-button type="primary" size="mini">添加分类</el-button>
				<!-- 添加分类按钮 -->
				<!-- 表单 -->
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="expand">
						<template slot-scope="props">
							<el-form label-position="left" inline class="demo-table-expand">
								<el-form-item label="商品名称">
									<span>{{ props.row.name }}</span>
								</el-form-item>
								<el-form-item label="所属店铺">
									<span>{{ props.row.shop }}</span>
								</el-form-item>
								<el-form-item label="商品 ID">
									<span>{{ props.row.id }}</span>
								</el-form-item>
								<el-form-item label="店铺 ID">
									<span>{{ props.row.shopId }}</span>
								</el-form-item>
								<el-form-item label="商品分类">
									<span>{{ props.row.category }}</span>
								</el-form-item>
								<el-form-item label="店铺地址">
									<span>{{ props.row.address }}</span>
								</el-form-item>
								<el-form-item label="商品描述">
									<span>{{ props.row.desc }}</span>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column label="商品 ID" prop="id"> </el-table-column>
					<el-table-column label="商品名称" prop="name"> </el-table-column>
					<el-table-column label="描述" prop="desc"> </el-table-column>
				</el-table>
				<!-- 表单 -->
			</div>
		</el-card>
		<!-- 卡片 -->
	</div>
</template>
