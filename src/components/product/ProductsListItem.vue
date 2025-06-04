<template>
    <div class="product-item">
        <div class="photo">
            <img
                :src="product.image"
                :alt="product.title"
            >
        </div>

        <div class="description">
            <h2>
                {{ product.title }}
            </h2>

            <h4>
                {{ product.category }}
            </h4>

            <h1>
                ${{ product.price }}
            </h1>

            <p>
                {{ product.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
})
</script>

<style scoped lang="scss">
.product-item {
    background: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    margin: 0;
    transition: all 0.3s;
    width: 650px;

    &:hover {
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .photo {
        padding: 30px;
        width: 45%;
        text-align: center;

        img {
            max-height: 240px;
            max-width: 232px;
        }
    }

    .description {
        padding: 30px;
        width: 55%;
        border-left: 2px solid #efefef;

        h1 {
            color: #515151;
            font-weight: 300;
            padding-top: 15px;
            margin: 0;
            font-size: 30px;
        }

        h2 {
            color: #515151;
            margin: 0;
            text-transform: uppercase;
            font-weight: 500;
        }

        h4 {
            margin: 0;
            color: #727272;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12px
        }

        p {
            font-size: 12px;
            line-height: 20px;
            color: #727272;
            padding: 20px 0;
            margin: 0;
        }
    }
}
</style>