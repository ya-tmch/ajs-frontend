<template>
    <section class="cart-page container">

        <div class="breadcrumbs text text_green text_bold text_sm">
            <span>Главная / Корзина</span>
        </div>

        <div class="cart-page__label">
            <h1>Ваша корзина</h1>
            <p class="text text_gray">
                Здесь вы можете просмотреть / изменить выбранные товары и перейти к оформлению заказа
            </p>
        </div>

        <div class="block-left-right my-sm-4">
            <div class="my-3 my-sm-0">
                <span class="text text_lg">
                    В вашей корзине <span class="text text_green text_bold">8</span>
                    товаров на сумму <span class="text text_green text_bold">31 123 руб.</span>
                </span>
            </div>
            <div class="my-3 my-sm-0">
                <a href="#" class="text text_lg text_gray text_underlined">
                    Продолжить покупки
                </a>
            </div>
        </div>

        <template v-for="index in [1, 2, 3]">

            <!-- Корзина (сгруппированная) -->
            <div :key="index" class="cart-group">
                <div class="cart-group__header">
                    <div>
                        <span class="p-2 text text_gray text_underlined text_upper">Склад</span>
                    </div>
                    <div>
                        <span class="p-2 text text_gray text_underlined text_upper">Товарные позиции</span>
                    </div>
                    <div>
                        <span class="p-2 text text_gray text_underlined text_upper">Цена</span>
                    </div>
                    <div>
                        <span class="p-2 text text_gray text_underlined text_upper">Кол-во</span>
                    </div>
                    <div>
                        <span class="p-2 text text_gray text_underlined text_upper">Стоимость</span>
                    </div>
                </div>

                <div class="cart-group__container">
                    <div class="cart-group__stock-info">
                        <span>Со склада:</span>
                        <br class="d-none d-sm-inline">
                        <span><i class="block-icon block-icon_point ml-3 mr-2"></i>Иркутск</span>
                    </div>
                    <div class="cart-group__content">
                        <div class="cart-group__items-wrapper">
                            <template v-for="index in [1, 2, 3]">

                                <!-- Позиция корзины -->
                                <div :key="index" class="cart-group__item">
                                    <div class="cart-group__item-td-1">
                                        <img class="cart-group__item-image"
                                             src="http://ajs.su/wa-data/public/shop/products/34/04/10434/images/26301/26301.500.png">
                                    </div>
                                    <div class="cart-group__item-td-2 cart-group__item-center">
                                        <span class="text text_green">
                                            ACL Комплект шатунных вкладышей TOYOTA/LEXUS 2JZGE/2JZGTE RACE
                                        </span>
                                    </div>
                                    <div class="cart-group__item-td-3 cart-group__item-center">
                                        <span class="text text_green">5 200 руб.</span>
                                    </div>
                                    <div class="cart-group__item-td-4 cart-group__item-center">
                                        <span>
                                            <input class="cart-group__item-number input" type="number"> шт.
                                        </span>
                                    </div>
                                    <div class="cart-group__item-td-5 cart-group__item-center">
                                        <span class="text">5 200 руб.</span>
                                    </div>
                                    <div class="cart-group__item-td-6 cart-group__item-center">
                                        <button type="button" class="button button_mobile-block button_outline-red">X
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="cart-group__footer">
                    <div class="cart-group__footer-total-and-price">
                        <div class="cart-group__footer-total">
                            <span class="text text_upper text_gray text_lg">Итого:</span>
                        </div>
                        <div class="cart-group__footer-price">
                            <span class="text text_gray text_bold text_lg">18 206</span>
                            <span class="text text_gray text_lg"> руб.</span>
                        </div>
                    </div>
                    <button class="button button_mobile-block">
                        <span class="mx-4">Оформить заказ</span>
                    </button>
                </div>
            </div>
        </template>
    </section>
</template>

<script>
    export default {}
</script>