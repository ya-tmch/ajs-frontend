<template>
    <section class="product-page container">

        <!--  -->
        <div class="breadcrumbs text text_green text_bold text_sm">
            <span>
                Главная / Каталог / Впускная система / Интеркуллеры/ Интеркулер универсальный 550-230-65 выхода 63мм
            </span>
        </div>

        <div class="cart-page__label">
            <h1>Информация о товаре</h1>

            <p class="text text_gray">
                Подробная информация о товаре, отзывы покупателей, рейтинг.
                Выбор дополнительных опций товара, расчет стоимости и покупка.
            </p>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div>
                    <img class="product-page__big-image"
                         src="http://ajs.su/wa-data/public/shop/products/34/04/10434/images/26301/26301.500.png">
                </div>

                <div class="text-center">
                    <p class="text text_gray">Наведите курсор, чтобы увеличить</p>
                </div>

                <div>
                    <img class="product-page__small-image product-page__small-image_active"
                         src="http://ajs.su/wa-data/public/shop/products/34/04/10434/images/26301/26301.500.png">

                    <template v-for="i in [1,2,3]">
                        <img :key="i" class="product-page__small-image"
                             src="http://ajs.su/wa-data/public/shop/products/34/04/10434/images/26301/26301.500.png">
                    </template>
                </div>
            </div>

            <div class="product-page__info col-sm-6">
                <h2>Интеркулер универсальный 550-230-65 выхода 63мм</h2>

                <div class="block-left-right my-2">
                    <div class="starts mb-3 mb-sm-0">
                        <span class="stars mr-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                        </span>
                        <span class="text text_green text_bold">3.58</span>
                    </div>
                    <div class="product-page__stat">
                        <span class="text text_gray text_md">23 отзыва</span>
                        <span class="text text_gray mx-2">|</span>
                        <span class="text text_gray text_md text_underlined">73 заказа</span>
                    </div>
                </div>

                <div class="product-page__hr my-4 my-sm-2"></div>

                <div class="block-left-right block-left-right_no-mobile my-2">
                    <div>
                        <div>Цена/склад:</div>
                        <div class="text text_gray text_sm">Выберите ближайший склад</div>
                    </div>
                    <div class="text-right">
                        <span class="text text_green text_bold">+</span>
                        <a href="#" class="text text_underlined text_green">
                            Добавить этот товар <br> к скравнению
                        </a>
                    </div>
                </div>

                <template v-for="i in 3">
                    <div class="product-page__properties product-page__stock"
                         :class="{'product-page__stock_active': i === 2}" :key="i">
                        <div class="text text_gray">
                            № <span class="text text_bold">{{ i }}</span>
                        </div>
                        <div>
                            <div class="product-page__stock-info p-2">
                                <span class="text text_green text_lg">4 400 руб.</span>
                                <span class="text text_gray text_through ml-2" v-if="i === 2">4 600 руб.</span>
                                <br><span>Из Иркутска</span>
                            </div>
                        </div>
                    </div>
                </template>

                <div class="product-page__properties">
                    <div>Опции:</div>
                    <div>
                        <div class="product-page__option py-1 px-2 mr-2 mb-2">Хар-ка</div>
                        <div class="product-page__option product-page__option_active py-1 px-2 mr-2 mb-2">Хар-ка</div>
                        <div class="product-page__option py-1 px-2 mr-2 mb-2">Хар-ка</div>
                        <div class="product-page__option py-1 px-2 mr-2 mb-2">Хар-ка</div>
                    </div>
                </div>

                <div class="product-page__properties">
                    <div>Количество:</div>
                    <div>
                        <input type="number" class="input input_50"> шт.
                    </div>
                </div>

                <div class="product-page__properties">
                    <div>Стоимость:</div>
                    <div>
                        <span class="text text_xl text_bold text_green">8 800 руб.</span>
                    </div>
                </div>

                <p class="text text_sm text_gray">Цена зависит от выбранных опций</p>

                <p>
                    Бонус за покупку: <span class="text text_green">88.93 руб.</span>
                </p>

                <div class="mb-2">
                    <button class="button mr-3 mb-2">Добавить в корзину</button>
                    <button class="button button_outline mb-2">Купить в 1 клик</button>
                </div>

                <p>
                    <a href="#" class="text text_gray text_underlined text_sm">
                        Добавить в "Моё избранное"
                    </a>
                </p>
            </div>
        </div>

        <div class="product-page__hr product-page__hr_bold my-4"></div>

        <!-- Закладки -->
        <div class="bookmarks">
            <div class="bookmarks__menu">
                <div class="bookmarks__menu-item bookmarks__menu-item_active">
                    <div class="bookmarks__menu-item-inner text text_upper">
                        Подробное описание
                    </div>
                </div>
                <div class="bookmarks__menu-item">
                    <div class="bookmarks__menu-item-inner text text_upper">
                        Отзывы
                    </div>
                </div>
                <div class="bookmarks__menu-item">
                    <div class="bookmarks__menu-item-inner text text_upper">
                        Условия и гарантии
                    </div>
                </div>
            </div>

            <div class="bookmarks__content p-4">
                <p>Общие физические размеры: 710мм х 230мм х 65мм</p>
                <p>Размеры ядра: 550мм х 230мм х 65мм</p>
                <p>Выхода: 63мм</p>
                <p>Фото универсальное для всех интеркулеров, фактический размер и пропорции смотрите в описании</p>
                <p>На теле интеркулера и в комплекте поставки отсутствуют установочные пластины и резьбовые втулки
                    для установки, их необходимо устанавливать или приваривать самостоятельно и отдельно</p>
                <p><strong>Товар бракованный</strong></p>
            </div>
        </div>

        <h3 class="my-4">Недавно вы смотрели</h3>

        <div class="row my-4">

            <div class="col-6 col-sm-3 mb-2" v-for="i in [1,2,3,4]" :key="i">
                <div class="product-card p-2">
                    <div class="mb-2">
                        <img class="product-card__image"
                             src="http://ajs.su/wa-data/public/shop/products/34/04/10434/images/26301/26301.500.png">
                    </div>

                    <div class="block-left-right">
                        <div class="text text_green">6 289 руб.</div>
                        <div class="text text_gray text_through">6 289 руб.</div>
                    </div>

                    <p>
                        Привод(шрус) внешний NKN без ABS Toyota Land Cruiser 80
                    </p>

                    <div class="block-left-right">
                        <div class="text text_gray product-card__orders-count">70 заказов</div>
                        <span class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>